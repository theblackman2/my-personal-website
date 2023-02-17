import { serviceProps } from "@/utils/types"

const Service = (props: serviceProps) => {
  return <div id="service">
    <div className="img">{props.image}</div>
    <h3 className="title">{props.title}</h3>
    <p className="description">{props.description}</p>
  </div>
}

export default Service