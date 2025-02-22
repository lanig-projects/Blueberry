import { create } from "zustand";
import { IFormMakerGroup } from "@shared/components/FormMaker/interfaces/IFormMakerGroup";
import { IFormField } from "@shared/components/FormMaker/interfaces/IFormField";
import { IFormMakerConfig } from "@shared/components/FormMaker/interfaces/IFormMakerConfig";
import { IFormCategory } from "@shared/components/FormMaker/interfaces/IFormCategory";

interface FormMakerStore {
  config: IFormMakerConfig;
  setConfig: (config: IFormMakerConfig) => void;

  groups: IFormMakerGroup[];
  setGroups: (groups: IFormMakerGroup[]) => void;

  addGroup: (group: IFormMakerGroup) => void;
  updateGroup: (group: IFormMakerGroup) => void;
  deleteGroup: (groupId: string) => void;

  fields: IFormField[];
  setFields: (fields: IFormField[]) => void;

  addField: (field: IFormField) => void;
  updateField: (field: IFormField) => void;
  deleteField: (fieldId: string) => void;
  addOptionToField: (fieldId: string) => void;
  updateOptionFromField: (fieldId: string, optionIndex: number, option: string) => void;
  removeOptionFromField: (fieldId: string, optionIndex: number) => void;

  categories: IFormCategory[];
  setCategories: (categories: IFormCategory[]) => void;

  addCategory: (category: IFormCategory) => void;
  updateCategory: (category: IFormCategory) => void;
  deleteCategory: (categoryId: string) => void;
}

export const useFormMakerStore = create<FormMakerStore>((set) => ({
  config: {},
  setConfig: (config) => set({ config }),

  groups: [],
  setGroups: (groups) => set({ groups }),

  addGroup: (group) => set((state) => ({ groups: [...state.groups, group] })),
  updateGroup: (group) => set((state) => ({ groups: state.groups.map((g) => g.id === group.id ? group : g) })),
  deleteGroup: (groupId) => set((state) => ({
    groups: state.groups.filter((g) => g.id !== groupId),
    fields: state.fields.filter((f) => f.group !== groupId)
  })),

  fields: [],
  setFields: (fields) => set({ fields }),

  addField: (field) => set((state) => ({ fields: [...state.fields, field] })),
  updateField: (field) => set((state) => ({ fields: state.fields.map((f) => f.id === field.id ? field : f) })),
  deleteField: (fieldId) => set((state) => ({ fields: state.fields.filter((f) => f.id !== fieldId) })),
  addOptionToField: (fieldId) => set((state) => ({
    fields: state.fields.map((f) => f.id === fieldId ? {
      ...f,
      options: [...(f.options?.length > 0 ? f.options : []), '']
    } : f)
  })),
  updateOptionFromField: (fieldId, optionIndex, option) => set((state) => ({
    fields: state.fields.map((f) => f.id === fieldId ? {
      ...f,
      options: f.options.map((o, index) => index === optionIndex ? option : o)
    } : f)
  })),
  removeOptionFromField: (fieldId, optionIndex) => set((state) => ({
    fields: state.fields.map((f) => f.id === fieldId ? {
      ...f,
      options: f.options.filter((_, index) => index !== optionIndex)
    } : f)
  })),

  categories: [],
  setCategories: (categories) => set({ categories }),

  addCategory: (category) => set((state) => ({ categories: [...state.categories, category] })),
  updateCategory: (category) => set((state) => ({ categories: state.categories.map((c) => c.id === category.id ? category : c) })),
  deleteCategory: (categoryId) => set((state) => ({
    categories: state.categories.filter((c) => c.id !== categoryId),
    fields: state.fields.map((f) => f.category === categoryId ? { ...f, category: '' } : f)
  }))
}));
