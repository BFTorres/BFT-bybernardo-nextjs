import {dsnCN} from "../../hooks/helper";

function Copyright({className, ...restProps}) {
    return (
        <h5 className={dsnCN(className)} {...restProps}>
            © Bernardo Fonseca Torres - {new Date().getFullYear()} 
        </h5>
    );
}


export default Copyright;