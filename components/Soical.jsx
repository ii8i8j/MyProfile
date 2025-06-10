import Link from "next/link"
import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";


const soical = [
  {
    icons: <FaGithub />,
    path: "https://github.com/ii8i8j"
  },
  {
    icons: <FaLinkedin />,
    path: "https://www.linkedin.com/in/mohamed-faraj-allah-86277a341/"
  },
  {
    icons: <BsInstagram />,
    path: "https://www.instagram.com/ii8i8j?igsh=MWFxd3U0bmFiOHNteQ%3D%3D"
  },
  {
    icons: <FaFacebook />,
    path: "https://www.facebook.com/profile.php?id=100056853830756"
  },
]
function Soical({containerStyles,iconStyles}) {
  return (
    <div className={containerStyles}>
      {soical.map((item,index)=>{
        return <Link href={item.path} target="_blank" className={iconStyles} key={index}>
          {item.icons}
        </Link>
      })}

    </div>
  )
}

export default Soical