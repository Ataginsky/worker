export default function Label(props) {
  return (
    <div className={`${props.labelClassName} rounded py-1 px-3 uppercase font-normal cursor-pointer border-transparent border hover:${props.borderColor}`} 
      onClick={props.onClick}>
      {props.children}
    </div>
)}