import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('renders component correctly', () => {
    //container is the object that contains part which show on screen at react component
    const { container } = render(<App />); 
    
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();

    const appLogo = screen.getByAltText('logo');
    expect(appLogo).toBeInTheDocument();
    expect(appLogo).toHaveAttribute('src','logo.svg');

    expect(container.getElementsByTagName('p')).toHaveLength(1);
    expect(container.getElementsByTagName('p')[0]).toHaveTextContent(
      'Edit src/App.tsx and save to reload'
    );

    //snapshot test
    expect(container).toMatchSnapshot();

  });
});