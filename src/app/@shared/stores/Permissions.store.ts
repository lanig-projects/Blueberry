import { create } from "zustand";

interface PermissionsStore {
  permissions: string[];
  setPermissions: (permissions: string[]) => void;
  addPermission: (permission: string) => void;
  removePermission: (permission: string) => void;
  insertPermissions: (permissions: string[]) => void;
  clearPermissions: () => void;
}

export const usePermissionsStore = create<PermissionsStore>((set) => ({
  permissions: [],
  setPermissions: (permissions) => set({ permissions }),
  addPermission: (permission) => set((state) => ({
    permissions: state.permissions.includes(permission)
      ? state.permissions
      : [...state.permissions, permission]
  })),
  removePermission: (permission) => set((state) => ({ permissions: state.permissions.filter((p) => p !== permission) })),
  insertPermissions: (permissions) => set((state) => ({
    permissions: [
      ...state.permissions,
      ...permissions.filter(permission => !state.permissions.includes(permission))
    ]
  })),
  clearPermissions: () => set({ permissions: [] })
}));
