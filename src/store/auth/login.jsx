import create from 'zustand';

const useLogin = create((set) => ({
    form: {
        email: '',
        password: '',
    },
    error: '',
    setForm: (key, value) => set((state) => ({
        form: {
            ...state.form,
            [key]: value,
        },
    })),
    setError: (message) => set({ error: message }),
    clearError: () => set({ error: '' }),
}));

export default useLogin;
