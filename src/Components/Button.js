
import '../Components/Button.css';

function Button({title}) {
    // console.log(props);

  return (
    <div className="button">
      <button>This is {title} Button</button>
    </div>
  );
}

export default Button;
