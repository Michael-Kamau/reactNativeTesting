import Users from '../src/components/Users';
import 'isomorphic-fetch';

it('Api test case', async function () {
    // global.fetch = jest.fn().mockImplementation(()=>
    // {
    //     let p = new Promise((resolve, reject) => {
    //         resolve({
    //             json: function () {
    //                 return {Id: 1};
    //             }
    //         })
    //     })
    //
    //     return p
    // })

    // const response = await Users.all();
    // expect(response.Id).toBe(1);

    jest.setTimeout(30000);
    const response = await Users.all();
    console.warn(response.movies[2].title);
    expect(response.movies[2].title).toEqual('The Matrix');
});
