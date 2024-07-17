import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import ThemeButtonSmall from "../Theme/ThemeButtonSmall";
import ThemeButton from "../Theme/ThemeButton";

export default function SendEmail() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();
    const { fields, append, remove } = useFieldArray({
        control,
        name: "recipients",
    });

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission, e.g., send data to your API
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label
                    htmlFor="floating_Attachments"
                    className="font-medium text-sm text-gray-400 duration-300 hover:text-purple-400"
                >
                    Select template
                </label>
                <select
                    id="large"
                    class="font-medium block w-full px-5 py-3 text-base text-gray-400 duration-300 border border-gray-300 rounded-lg bg-gray-50 bg-opacity-5 focus:bg-opacity-25 focus:outline-0 focus:ring-purple-400 focus:border-purple-400"
                    {...register("emailTemplate", {
                        required: "Email template must be selected",
                    })}
                >
                    <option selected={true} value="" hidden={true}>
                        Choose a template
                    </option>
                    <option value="US">
                        <div>
                            <div className="font-bold">Name</div> -
                            <div class="block text-xs font-normal text-gray-500 dark:text-gray-300">
                                Subject
                            </div>
                        </div>
                    </option>
                    <option value="CA">
                        <div>
                            <div className="font-bold">Name</div> -
                            <div class="block text-xs font-normal text-gray-500 dark:text-gray-300">
                                Subject
                            </div>
                        </div>
                    </option>
                    <option value="FR">
                        <div>
                            <div className="font-bold">Name</div> -
                            <div class="block text-xs font-normal text-gray-500 dark:text-gray-300">
                                Subject
                            </div>
                        </div>
                    </option>
                    <option value="DE">
                        <div>
                            <div className="font-bold">Name</div> -
                            <div class="block text-xs font-normal text-gray-500 dark:text-gray-300">
                                Subject
                            </div>
                        </div>
                    </option>
                </select>
                {errors.emailTemplate && (
                    <span className="text-red-600 text-xs">
                        {errors.emailTemplate.message}
                    </span>
                )}
            </div>
            <div>
                {fields.length < 1 && (
                    <p className="text-red-600 text-xs">
                        At least one recipient is required
                    </p>
                )}
                <label
                    htmlFor="floating_Recipients"
                    className="font-medium text-sm text-gray-400 duration-300 hover:text-purple-400"
                >
                    Recipients
                </label>
                <div
                    className="grid grid-cols-2 gap-5 my-3"
                    id="floating_Recipients"
                >
                    {fields.map((item, index) => (
                        <div>
                            <div className="flex gap-5">
                                <div
                                    key={item.id}
                                    className="relative z-0 w-full my-1 group"
                                >
                                    <input
                                        type="email"
                                        id={"floating_Recipients" + index}
                                        className="block py-2.5 px-1 w-full text-base text-gray-300 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-purple-400 peer"
                                        placeholder=" "
                                        {...register(
                                            `recipients.${index}.email`,
                                            {
                                                required: true,
                                            }
                                        )}
                                    />
                                    <label
                                        htmlFor={"floating_Recipients" + index}
                                        className="peer-focus:font-medium absolute text-sm text-gray-400 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-400 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        Recipient
                                    </label>
                                </div>
                                <div className="my-auto">
                                    <ThemeButtonSmall
                                        type={"button"}
                                        onClick={() => remove(index)}
                                        text={"Remove"}
                                    />
                                </div>
                            </div>
                            <div>
                                {errors.recipients?.[index]?.email && (
                                    <span className="text-red-600 text-xs">
                                        This field is required
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <ThemeButtonSmall
                    type={"button"}
                    onClick={() => append({ email: "" })}
                    text={"Add Recipient"}
                />
            </div>

            <ThemeButton
                type={"submit"}
                onClick={() => append({ email: "" })}
                text={"Send Email"}
            />
        </form>
    );
}
