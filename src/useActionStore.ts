import create from 'zustand';

interface ActionState {
  action: 'edit' | 'add' | null;
  setAction: (action: 'edit' | 'add' | null) => void;
}

const useActionStore = create<ActionState>((set) => ({
  action: null,
  setAction: (action) => set({ action }),
}));

export default useActionStore;
