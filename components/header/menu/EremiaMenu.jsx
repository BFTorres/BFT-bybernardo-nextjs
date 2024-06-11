import React from "react";
import Navbar, {Nav} from "../../nav/Navbar";
import MenuContent from "./MenuContent";
import Logo from "../../logo/Logo";


const menuContent = [
    {
        name: "HOME", href: "/"
       /*  dropdownMenu: [
            {name: "Main", href: "/"} */
            /* {name: "One Page 2", href: "/demo-2"},
            {name: "One Page 3", href: "/demo-3"},
            {name: "Corporate", href: "/corporate"},
            {name: "Corporate 2", href: "/corporate-2"},
            {name: "Personal", href: "/personal"},
            {name: "Personal 2", href: "/personal-2"}, 
        ]*/
    },
    {
        name: "PORTFOLIO", href: "/slider-full-distortion-h"/* ,
        dropdownMenu: [
            {
                name: "Sliders",
                dropdownMenu: [
                    {
                        name: "Full Screen",
                        dropdownMenu: [
                            {name: "Slider Distortion / H", href: "/slider-full-distortion-h"},
                            {name: "Slider Distortion / V", href: "/slider-full-distortion-v"},
                            {name: "Slider Parallax / H", href: "/slider-full-parallax-h"},
                            {name: "Slider Parallax / V", href: "/slider-full-parallax-v"}
                        ]
                    },
                    {
                        name: "Padding Screen",
                        dropdownMenu: [
                            {name: "Slider Distortion / H", href: "/slider-padding-distortion-h"},
                            {name: "Slider Distortion / V", href: "/slider-padding-distortion-v"},
                            {name: "Slider Parallax / H", href: "/slider-padding-parallax-h"},
                            {name: "Slider Parallax / V", href: "/slider-padding-parallax-v"}
                        ]
                    },
                    {
                        name: "Half Screen",
                        dropdownMenu: [
                            {name: "Slider Distortion / H", href: "/slider-half-distortion-h"},
                            {name: "Slider Distortion / V", href: "/slider-half-distortion-v"},
                            {name: "Slider Parallax / H", href: "/slider-half-parallax-h"},
                            {name: "Slider Parallax / V", href: "/slider-half-parallax-v"}
                        ]
                    }
                ]
            },
            {
                name: "Carousel",
                dropdownMenu: [
                    {name: "Carousel Portfolio 1", href: "/carousel-portfolio-1"},
                    {name: "Carousel Portfolio 2", href: "/carousel-portfolio-2"},
                    {name: "Carousel Portfolio 3", href: "/carousel-portfolio-3"}
                ]
            }, {
                name: "Card",
                dropdownMenu: [
                    {name: "Card 2 Columns", href: "/work-card-2-col"},
                    {name: "Card 3 Columns", href: "/work-card-3-col"},
                    {name: "Card 4 Columns", href: "/work-card-4-col"},
                ]
            }, {
                name: "Classic",
                dropdownMenu: [
                    {name: "classic 2 Columns", href: "/work-classic-2-col"},
                    {name: "classic 3 Columns", href: "/work-classic"},

                ]
            },

        ] */
    },
    {name: "ARTICLES", href: "/blog-list"},

    /* {
        name: "Works",
        dropdownMenu: [
                
                    {name: "BMW Group", href: '/portfolio/bmw-group'},
                    {name: "Mercedes Benz", href: "/portfolio/mercedes-benz"},
                    {name: "Kronos", href: '/portfolio/kronos'},
                    {name: "Principal Garden", href: "/portfolio/principal-garden"},
                    {name: "Small Silver Car", href: '/portfolio/small-silver-car'},
                    {name: "Yaren Collection", href: '/portfolio/yaren-collection'},

        ]
    }, */
    
    
    
    /* 
    {name: "Service", href: "/service"}, */
    /* {
        name: "Stories",
        dropdownMenu: [
            {
                name: "List",
                dropdownMenu: [
                    {name: "List 2 Columns", href: "/blog-list"},
                    {name: "List 3 Columns", href: "/blog-list-2"},
                ]
            }, {
                name: "Card",
                dropdownMenu: [
                    {name: "Card 2 Columns", href: "/blog-card"},
                    {name: "Card 3 Columns", href: "/blog-card-2"},
                    {name: "Card 4 Columns", href: "/blog-card-3"},
                ]
            }, {
                name: "Classic",
                dropdownMenu: [
                    {name: "Classic 2 Columns", href: "/blog-classic"},
                    {name: "Classic 3 Columns", href: "/blog-classic-2"},
                    {name: "Classic 4 Columns", href: "/blog-classic-3"},
                ]
            }, {name: "Single Post", href: "/single-blog"}

        ]
    }, */
    {name: "ABOUT", href: "/about"},
    {name: "CONTACT", href: "https://www.linkedin.com/in/bernardo-fonseca-torres/"},
    {name: "IMPRINT", href: "/imprint"}

];

const EremiaMenu = ({hamburger}) => {

    let $key = 0;
    const getSubMenu = (items) => {
        $key++;
        if (items.dropdownMenu) {
            return (<Nav.Dropdown name={items.name}
                                  key={$key}>{items.dropdownMenu.map(item => getSubMenu(item))}</Nav.Dropdown>);
        }
        return (
            <Nav.Link href={items.href} key={$key}>{items.name}</Nav.Link>
        );
    }


    return (
        <Navbar hamburger={hamburger}>
            <Navbar.Brand href={"/"} transitionPage={{title: "bybernardo"}}>
                <Logo width="60px" height="auto"/>
            </Navbar.Brand>

            <Navbar.Collapse cover="Menu">
                <Nav>
                    {menuContent.map(item => getSubMenu(item))}
                </Nav>
                <MenuContent className="section-margin"/>
            </Navbar.Collapse>
        </Navbar>
    );

}

EremiaMenu.defaultProps = {
    hamburger: false
}


export default EremiaMenu;