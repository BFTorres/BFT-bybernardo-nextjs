import {dsnCN} from "../../hooks/helper";


const socialContent = [
    {href: "https://www.linkedin.com/in/bernardo-fonseca-torres/", name: "LinkedIn"},
    {href: "https://www.xing.com/profile/Bernardo_FonsecaTorres", name: "XING"},
    {href: "https://medium.com/@bernardofonsecatorres", name: "Medium"}
];


function Social({className, ...restProps}) {
    return (
        <div className={dsnCN("footer-social p-relative", className)} {...restProps}>
            <ul>
                {socialContent && socialContent.map(($item, $number) =>
                    <li className="over-hidden" key={$number}>
                        <a href={$item.href} data-dsn="parallax" target="_blank" rel="nofollow">{$item.name}</a>
                    </li>)
                }
            </ul>
        </div>
    );
}

export default Social;