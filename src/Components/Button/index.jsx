const Button = ({children, handleClick}) => {
    
    return (
        <>
            <div>
                <button onClick={handleClick} className="inline-block border border-amber-200 text-xl bg-purple-700 text-white font-[600] px-[25px] py-[10px] rounded-md">
                    {children}
                </button>
            </div>
        </>
    )
}

export default Button;