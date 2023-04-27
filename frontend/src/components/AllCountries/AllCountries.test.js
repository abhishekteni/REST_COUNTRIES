import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AllCountries from './AllCountries';

describe('AllCountries component', () => {

  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue([]),
      ok: true,
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

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

  // it('Country List',async ()=>{
  //   render( <AllCountries/> );
  //   await waitFor(()=>{
  //     screen.getByText("ok")
  //   })

  // })

  it('should display an error message if the API call fails', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: false,
      status: 500,
      statusText: 'Internal Server Error',
    });
    render(<AllCountries />);
    await waitFor(() => expect(screen.getByText('Problem')).toBeInTheDocument());
  })

  it('should display a list of countries when data is fetched successfully', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue([
        {
          name: {
            common: 'Afghanistan',
          },
          population: 27657145,
          region: 'Asia',
          capital: 'Kabul',
          flags: {
            png: 'https://restcountries.com/data/afg.png',
          },
        },
      ]),
      ok: true,
    });
    render(<AllCountries />);
    
    screen.debug();
  });
  




  // test('getCountryByName should handle a successful API response', async () => {
  //   const mockData = {name: 'USA', capital: 'Washington D.C.'}
  //   const mockResponse = {ok: true, json: () => Promise.resolve(mockData)}
  //   jest.spyOn(global, 'fetch').mockResolvedValueOnce(mockResponse)
    
  //   const countryName = 'USA'
  //   await AllCountries.getCountryByName(countryName)
  //   expect(global.fetch).toHaveBeenCalledTimes(1)
  //   expect(global.fetch).toHaveBeenCalledWith(`/api/countries/countryname/${countryName}`)
  //   expect(setCountries).toHaveBeenCalledWith(mockData)
  //   expect(setLoading).toHaveBeenCalledWith(false)
  //   expect(setErr).not.toHaveBeenCalled()
  // })

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