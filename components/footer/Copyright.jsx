import {dsnCN} from "../../hooks/helper";

function Copyright({className, ...restProps}) {
    return (
        <h5 className={dsnCN(className)} {...restProps}>
            {new Date().getFullYear()} © bybernardo 
        </h5>
    );
}


export default Copyright;