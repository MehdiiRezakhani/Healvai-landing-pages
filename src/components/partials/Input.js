import clsx from "clsx";
export default function Input({
  name,
  value,
  placeholder,
  type,
  onChange,
  required,
  py,
  h= 10,
  dir = "ltr",
  disabled = false,
  list,
  defaultValue,
  children,
  onBlur,
  formik,
  title,
}) {
  return (
    <div className={`relative w-full mx-1`} dir={dir}>
      <label 
        htmlFor={name}
        className="inline-block text-sm text-gray_800 dark:text-white/70 font-extrabold capitalize ml-2 mb-1.5"
      ><bdi>{title ? title : name}{required ? `*` : ''}</bdi></label>
      {type === "select" ? (
        <select
          id={name}
          className={clsx(
            `text-sm placeholder:text-gray_800 dark:placeholder:text-white/30 font-semibold bg-white w-full h-[${h}px] px-4 py-1 bg-transparent appearance-none rounded-xl border-0 focus:border-0 focus:outline-none focus:ring-0 peer`,
            {
              "border-none": disabled,
              'text-gray_800 dark:text-white/30' : value == '' ,
              'text-gray_800 dark:text-white/75' : value
            }
          )}
          required={required}
          onChange={onChange}
          value={value ? value : ''}
          name={name}
          disabled={disabled}
        >
          <option value="" disabled hidden className="text-black/30 dark:text-white/30">{placeholder}</option>
          {list.map((item,index) => 
              <option 
                key={index} 
                value={item.value}
                className="text-sm text-black dark:text-white dark:bg-black placeholder:text-black/30 dark:placeholder:text-white/30"
                selected={value === item.value}

              >{item.title}</option>
          )}
        </select>
      ) : type == "textarea" 
      ? (
        <textarea
          id={name}
          className={`text-sm text-gray_800 dark:text-white/75 placeholder:text-gray_400 dark:placeholder:text-white/30 font-semibold bg-white flex items-start justify-start w-full h-${h} px-4 py-4 bg-transparent appearance-none rounded-xl border-0 focus:border-0 focus:outline-none focus:ring-0 peer`}
          placeholder={required ? `${placeholder}*` : placeholder}
          onChange={onChange}
          value={value}
          name={name}
          disabled={disabled}
          onBlur={onBlur}
          required={required}
        ></textarea>
      ) 
      : (
        <input
          type={type}
          id={name}
          className={`text-sm text-gray_800 dark:text-white/75 placeholder:text-gray_400 dark:placeholder:text-white/30 font-semibold bg-white flex items-start justify-start w-full h-${h} px-4 py-4 bg-transparent appearance-none rounded-xl border-0 focus:border-0 focus:outline-none focus:ring-0 peer`}
          placeholder={required ? `${placeholder}*` : placeholder}
          onChange={onChange}
          value={value ? value : ''}
          name={name}
          disabled={disabled}
          onBlur={onBlur}
          required={required}
        />
        )}
        {formik.touched[name] && formik.errors[name] ?
          <p className='text-red_600 text-[9px] font-bold self-start ml-2 mt-1'><bdi>{formik.errors[name]}</bdi></p>
        : null}
    </div>
  );
}
