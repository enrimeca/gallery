import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Gallery from ".";
import { images } from '../../constants/images';

describe('Gallery Component', ()=> {
  test('Should show the first image initially', ()=> {
    render(<Gallery/>);
    const defaultImage = screen.getByRole('img', { name: "Main"});
    expect(defaultImage).toHaveAttribute('src', images[0].original);
  });

  test('Should navigate to the next image', ()=> {
    render(<Gallery/>);
    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);
    const displayedImage = screen.getByRole('img', { name: "Main"});
    expect(displayedImage).toHaveAttribute('src', images[1].original);
  });

  test('Should navigate to the previous image', ()=> {
    render(<Gallery/>);
    const previousButton = screen.getByText('<');
    fireEvent.click(previousButton);
    const displayedImage = screen.getByRole('img', { name: "Main"});
    expect(displayedImage).toHaveAttribute('src', images[images.length-1].original);
  });

  test('Should show the thumbail selected', ()=> {
    render(<Gallery/>);
    const thumbnail = screen.getByRole('img', { name: "Thumbnail 4"});
    fireEvent.click(thumbnail);
    const displayedImage = screen.getByRole('img', { name: "Main"});
    expect(displayedImage).toHaveAttribute('src', images[3].original);
  })
})

