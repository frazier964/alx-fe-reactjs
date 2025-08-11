import { create } from 'zustand';
import { fetchUsers } from '../services/githubService';

export const useUserStore = create((set) => ({
  username: '',
  location: '',
  minRepos: '',
  users: [],
  loading: false,
  error: null,

  setUsername: (username) => set({ username }),
  setLocation: (location) => set({ location }),
  setMinRepos: (minRepos) => set({ minRepos }),

  searchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const { username, location, minRepos } = useUserStore.getState();
      const results = await fetchUsers(username, location, minRepos);
      set({ users: results, loading: false });
    } catch (err) {
      set({ error: err.message, loading: false });
    }
  }
}));
