import Link from "next/link"
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";


const soical = [
  {
    icons: <FaGithub />,
    path: "GitHub"
  },
  {
    icons: <FaLinkedin />,
    path: "GitHub"
  },
  {
    icons: <FaYoutube />,
    path: "GitHub"
  },
  {
    icons: <FaTwitter />,
    path: "GitHub"
  },
]
function Soical({containerStyles,iconStyles}) {
  return (
    <div className={containerStyles}>
      {soical.map((item,index)=>{
        return <Link href={item.path} className={iconStyles} key={index}>
          {item.icons}
        </Link>
      })}

    </div>
  )
}

export default Soical