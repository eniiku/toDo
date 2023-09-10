import create from 'zustand';

interface ActionState {
  action: 'edit' | 'add' | 'preview' | null;
  setAction: (action: 'edit' | 'add' | 'preview' | null) => void;
}

const useActionStore = create<ActionState>((set) => ({
  action: null,
  setAction: (action) => set({ action }),
}));

export default useActionStore;
