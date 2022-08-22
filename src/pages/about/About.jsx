import ImageContainer from '../../components/ImageContainer'
import montainImg from '../../assets/kalen.png'
import DropDownMenu from '../../components/DropDownMenu'

import './About.css'

const About = () => {
  return (
    <div className="About">
      <ImageContainer image={montainImg} height="200px" opacity={0.3} />
      <div className="aboutContent">
        <DropDownMenu title={'Fiabilité'}>
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </DropDownMenu>
        <DropDownMenu title={'Respect'}>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </DropDownMenu>
        <DropDownMenu title={'Service'}>
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </DropDownMenu>
        <DropDownMenu title={'Responsabilté'}>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </DropDownMenu>
      </div>
    </div>
  )
}

export default About
