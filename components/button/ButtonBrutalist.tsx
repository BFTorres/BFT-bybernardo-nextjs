import {dsnCN} from "../../hooks/helper";

import {LinkProps} from "next/dist/client/link";
import DsnLink from "../../hooks/DsnLink";
import {transitionPage} from "../../hooks/EremiaType";


interface ButtonProps {
    className?: string,
    href: string,
    linkProps?: Object | LinkProps,
    transitionPage?: transitionPage,
}


function ButtonBrutalist({
                    // @ts-ignore
                    className, borderRadius, children, href, LinkProps,
                    transitionPage = false,
                    ...restProps
                }: ButtonProps) {

    return (
        <DsnLink transitionPage={transitionPage} href={href} {...LinkProps} className={dsnCN("dsn-button", className )} {...restProps}>
                {children}
        </DsnLink>
    );
}

export default ButtonBrutalist;