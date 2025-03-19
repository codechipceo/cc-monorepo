
const Separator = ({label} :{label:string}) => {
    return (
        <div className="sidebar__separator">

<span className="font-xs">{label}</span>
<hr />
        </div>
    );
}

export default Separator