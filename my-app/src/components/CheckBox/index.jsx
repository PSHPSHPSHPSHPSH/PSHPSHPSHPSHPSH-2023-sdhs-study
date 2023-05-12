function CheckBox({ onChange }) {
    const handlecheckd = e => {
        onChange(e.target.checked);
    };
    return <input type="checkbox" onChange={handlecheckd} />;
}

export default CheckBox;