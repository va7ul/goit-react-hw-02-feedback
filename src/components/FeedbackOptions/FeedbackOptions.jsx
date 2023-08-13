import { nanoid } from 'nanoid';
import { List } from './FeedbackOptions';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <li key={nanoid()}>
          <button onClick={() => onLeaveFeedback({ option })}>{option}</button>
        </li>
      ))}
    </List>
  );
};
