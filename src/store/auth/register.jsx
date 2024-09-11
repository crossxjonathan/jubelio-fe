import create from 'zustand';

const useRegister = create((set) => ({
    form: {
        email: '',
        name: '',
        phone: '',
        password: '',
        confirmPassword: '',
    },
    setForm: (newForm) => set((state) => ({ form: { ...state.form, ...newForm } })),
    resetForm: () => set({
        form: {
            email: '',
            name: '',
            phone: '',
            password: '',
            confirmPassword: '',
        },
    }),
}));

export default useRegister;
