import { create } from "zustand";

interface ActiveListStore {
  members: string[];
  add: (id: string) => void;
  remove: (id: string) => void;
  set: (ids: string[]) => void;
}

/**
 * Creates an active list store with methods to manage its members.
 * @returns {Object} An object containing the following properties and methods:
 *   - members {Array<string|number>} The current list of member IDs
 *   - add {Function} Adds a new member ID to the list
 *   - remove {Function} Removes a member ID from the list
 *   - set {Function} Sets the entire list of member IDs
 */
const useActiveList = create<ActiveListStore>((set) => ({
  members: [],
  add: (id) => set((state) => ({ members: [...state.members, id] })),
  remove: (id) =>
    set((state) => ({ members: state.members.filter((memberId) => memberId !== id) })),
  set: (ids) => set({ members: ids }),
}));

export default useActiveList;
