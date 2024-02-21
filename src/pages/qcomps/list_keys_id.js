export const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'szV5sdG'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'YfeOqp2'
}];

function getImageUrl(imageId) {
    return "https://i.imgur.com/" + imageId + "s.jpg"
}
export default function List() {
  const listItems = people.map(person =>
    <li key = {person.id}>
    <ul>
      <img src={getImageUrl(person.imageId)}></img>
      <li key = {person.name + person.id}>{person.name}</li>
      <li key = {person.profession+person.id}>{person.Profession}</li>
      <li key = {person.accomplishment+person.id}>{person.accomplishment}</li>
    </ul>

    </li>
  );
  return <ul>{listItems}</ul>;
}