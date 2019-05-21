



class SavedLocationList extends Component {
  render() {


  return();
  }
}

function SaveLocation(props) {
  localStorage.setItem("SavedLocationList", JSON.stringify(props.value));

}



export default SavedLocationList;
