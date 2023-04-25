import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AllCountries from './AllCountries';

describe('AllCountries component', () => {
  it('renders loading spinner when loading', async () => {
    render(<AllCountries />);
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('renders error message when there is an error', async () => {
    const errorMessage = 'Unable to fetch data';
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(new Error(errorMessage)));
    render(<AllCountries />);
    expect(await screen.findByText(errorMessage)).toBeInTheDocument();
  });

  test('About renders correctly', () => {
    render( <AllCountries/> )
    expect(screen.getByText("Home Page")).toBeInTheDocument()
  })

  it('Country List',async ()=>{
    render( <AllCountries/> );
    await waitFor(()=>{
      screen.getByText("ok")
    })

  })


//   it('renders list of countries', async () => {
//     const mockData = [{ name: { common: 'India' }, region: 'Asia', capital: 'Delhi' }, { name: { common: 'Ireland' }, region: 'Europe', capital: 'Dublin' }];
//     jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({ ok: true, json: () => Promise.resolve(mockData) }));
//     render(<AllCountries />);
//     await screen.findByText('India');
//     expect(await screen('India')).toBeInTheDocument();
//     expect(screen.getByText('Ireland')).toBeInTheDocument();
//   });

//   it('filters countries by name', async () => {
//     const mockData = [{ name: { common: 'India' }, region: 'Asia', capital: 'Delhi' }];
//     jest.spyOn(global, 'fetch').mockImplementation((url) => {
//       if (url.endsWith('countryname/India')) {
//         return Promise.resolve({ ok: true, json: () => Promise.resolve(mockData) });
//       }
//       return Promise.resolve({ ok: true, json: () => Promise.resolve([]) });
//     });
//     render(<AllCountries />);
//     fireEvent.change(screen.getByRole('textbox'), { target: { value: 'India' } });
//     expect(await screen.findByText('India')).toBeInTheDocument();
//     expect(screen.queryByText('Ireland')).not.toBeInTheDocument();
//   });

//   it('filters countries by region', async () => {
//     const mockData = [{ name: { common: 'India' }, region: 'Asia', capital: 'Delhi' }];
//     jest.spyOn(global, 'fetch').mockImplementation((url) => {
//       if (url.endsWith('countryregion/Asia')) {
//         return Promise.resolve({ ok: true, json: () => Promise.resolve(mockData) });
//       }
//       return Promise.resolve({ ok: true, json: () => Promise.resolve([]) });
//     });
//     render(<AllCountries />);
//     fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Asia' } });
//     expect(await screen.findByText('India')).toBeInTheDocument();
//     expect(screen.queryByText('Ireland')).not.toBeInTheDocument();
//   });
 });