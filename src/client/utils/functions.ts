import React, { useState } from 'react';

export const useForm = () => {
    const [values, setValues] = useState<{ [key: string]: string }>({});

    const handleChanges = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const clear = () => setValues({});

    const populate = (pValues: React.SetStateAction<{ [key: string]: string; }>) => setValues(pValues);

    return {
        values,
        handleChanges,
        clear,
        populate
    }
}

// { value, handleChanges, clear, populate } = useForm();
