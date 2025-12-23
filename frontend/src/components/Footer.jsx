import logo from "../assets/lail.png";
import NameLink from "./NameLink";

/* 
resources:
https://grok.com/share/c2hhcmQtMg_d3393ad9-551e-4fa5-a554-ebcafeeec71c
https://grok.com/share/c2hhcmQtMg_25573886-0624-46ec-8b82-c1eb6a214b75
*/

let footerArr = [
  { section: "Services", items: ["Design", "Marketing", "Advertisement"] },
  { section: "Company", items: ["About us", "Contact", "Jobs", "Press kit"] },
  {
    section: "Legal",
    items: ["Terms of use", "Privacy policy", "Cookie policy"],
  },
];

function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <aside>
          <img src={logo} width="42" height="42"></img>
          <p>
            lail Industries Ltd.
            <br />
            Providing reliable tech since 1934
          </p>
        </aside>

        {footerArr.map((sectionObj, sectionIndex) => (
          <>
            <nav key={sectionIndex}>
              <h6 className="footer-title">{sectionObj.section}</h6>
              {sectionObj.items.map((item, itemIndex) => {
                const urlSlug = item.toLowerCase().replace(/\s+/g, "-");
                return (
                  <NameLink
                    key={itemIndex}
                    className="link link-hover"
                    name={item}
                    to={`/${urlSlug}`}
                  />
                );
              })}
            </nav>
          </>
        ))}
      </footer>
    </>
  );
}

export default Footer;
