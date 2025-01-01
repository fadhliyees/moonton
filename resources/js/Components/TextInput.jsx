// import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

// export default forwardRef(function TextInput(
//     { type = 'text', className = '', isFocused = false, ...props },
//     ref,
// ) {
//     const localRef = useRef(null);

//     useImperativeHandle(ref, () => ({
//         focus: () => localRef.current?.focus(),
//     }));

//     useEffect(() => {
//         if (isFocused) {
//             localRef.current?.focus();
//         }
//     }, [isFocused]);

//     return (
//         <input
//             {...props}
//             type={type}
//             className={
//                 'rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ' +
//                 className
//             }
//             ref={localRef}
//         />
//     );
// });

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "email", "password", "number", "file"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default function TextInput({
    type = "text",
    name,
    value,
    defaultValue,
    className,
    variant = "primary",
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    isError,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                defaultValue={defaultValue}
                // className={`rounded-2xl py-[13px] px-7 w-full input-${variant} ${
                //     isError ? "input-error" : ""
                // } ${className ? className : ""}`}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full input-${variant} ${className}`}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
}
