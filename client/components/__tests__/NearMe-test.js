import React from 'react';
import { shallow, mount, render } from 'enzyme';
import NearMe from '../NearMe';

describe('NearMe Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<NearMe />);
    wrapper.setState({ business_id: '--9e1ONYQuAa-CB_Rrw7Tw' });
    wrapper.setState({
      nearby: [{
        categories: ['African', 'Restaurants', 'Nightlife', 'Bars', 'Steakhouses', 'Cocktail Bars', 'American (New)', 'Seafood'],
        _id: '5ad3bf12bf18e506f0efc48b',
        business_id: '-1m9o3vGRA8IBPNvNqKLmA',
        name: "Bavette's Steakhouse & Bar",
        neighborhood: 'The Strip',
        address: '3770 Las Vegas Blvd S',
        city: 'Las Vegas',
        state: 'NV',
        postal_code: '89109',
        latitude: 36.10433,
        longitude: -115.175593333,
        stars: 4.5,
        review_count: 38,
        is_open: 1,
        attributes: {
          Alcohol: 'full_bar',
          HasTV: false,
          NoiseLevel: 'average',
          RestaurantsAttire: 'dressy',
          BusinessAcceptsCreditCards: true,
          Music: {
            dj: false, background_music: true, no_music: false, karaoke: false, live: true, video: false, jukebox: false,
          },
          Ambience: {
            romantic: false, intimate: true, classy: true, hipster: false, divey: false, touristy: false, trendy: false, upscale: true, casual: false,
          },
          RestaurantsGoodForGroups: true,
          WiFi: 'free',
          RestaurantsReservations: true,
          RestaurantsTableService: true,
          Smoking: 'no',
          GoodForKids: false,
          HappyHour: false,
          GoodForDancing: false,
          BikeParking: true,
          OutdoorSeating: false,
          RestaurantsPriceRange2: 4,
          RestaurantsDelivery: false,
          GoodForMeal: {
            dessert: false, latenight: false, lunch: false, dinner: true, breakfast: false, brunch: false,
          },
          BusinessParking: {
            garage: false, street: false, validated: false, lot: false, valet: false,
          },
          CoatCheck: false,
          RestaurantsTakeOut: false,
        },
        hours: {
          Monday: '17:00-22:00', Tuesday: '17:00-22:00', Friday: '17:00-23:00', Wednesday: '17:00-22:00', Thursday: '17:00-22:00', Sunday: '17:00-22:00', Saturday: '17:00-23:00',
        },
        __v: 0,
      }, {
        categories: ['Event Planning & Services', 'Bars', 'Nightlife', 'Restaurants', 'Breakfast & Brunch', 'Steakhouses', 'Lounges', 'Venues & Event Spaces'],
        _id: '5ad3bf12bf18e506f0efc4bb',
        business_id: '-N_agk8RUHvHk3GVDsyunQ',
        name: 'Hitchin Post Saloon & Steakhouse',
        neighborhood: '',
        address: '3650 Las Vegas Blvd N',
        city: 'Las Vegas',
        state: 'NV',
        postal_code: '89115',
        latitude: 36.2231775639,
        longitude: -115.082564807,
        stars: 4,
        review_count: 55,
        is_open: 1,
        attributes: {
          Alcohol: 'full_bar',
          HasTV: true,
          NoiseLevel: 'quiet',
          RestaurantsAttire: 'casual',
          BusinessAcceptsCreditCards: true,
          Music: {
            dj: false, background_music: false, no_music: false, karaoke: false, live: false, video: false, jukebox: false,
          },
          Ambience: {
            romantic: false, intimate: false, classy: false, hipster: false, divey: true, touristy: false, trendy: false, upscale: false, casual: true,
          },
          RestaurantsGoodForGroups: true,
          Caters: false,
          WiFi: 'free',
          RestaurantsReservations: false,
          RestaurantsTableService: true,
          RestaurantsTakeOut: true,
          GoodForKids: false,
          HappyHour: true,
          GoodForDancing: false,
          BikeParking: true,
          OutdoorSeating: true,
          RestaurantsPriceRange2: 2,
          RestaurantsDelivery: false,
          BestNights: {
            monday: false, tuesday: true, friday: false, wednesday: true, thursday: true, sunday: false, saturday: false,
          },
          GoodForMeal: {
            dessert: false, latenight: false, lunch: true, dinner: true, breakfast: true, brunch: false,
          },
          BusinessParking: {
            garage: false, street: false, validated: false, lot: true, valet: false,
          },
          CoatCheck: false,
          Smoking: 'yes',
          WheelchairAccessible: true,
        },
        hours: {
          Monday: '0:00-0:00', Tuesday: '0:00-0:00', Friday: '0:00-0:00', Wednesday: '0:00-0:00', Thursday: '0:00-0:00', Sunday: '0:00-0:00', Saturday: '0:00-0:00',
        },
        __v: 0,
      }, {
        categories: ['Seafood', 'American (Traditional)', 'Steakhouses', 'Restaurants'],
        _id: '5ad3bf12bf18e506f0efc4df',
        business_id: '005XmZKuJZuNbl5tGXc5SA',
        name: "Tony Roma's",
        neighborhood: 'Downtown',
        address: '620 E Sahara Ave',
        city: 'Las Vegas',
        state: 'NV',
        postal_code: '89104',
        latitude: 36.1443082166,
        longitude: -115.145690833,
        stars: 3,
        review_count: 21,
        is_open: 0,
        attributes: {
          GoodForMeal: {
            dessert: false, latenight: false, lunch: true, dinner: true, breakfast: false, brunch: false,
          },
          Alcohol: 'full_bar',
          Caters: true,
          HasTV: true,
          RestaurantsGoodForGroups: true,
          NoiseLevel: 'average',
          WiFi: 'free',
          RestaurantsAttire: 'casual',
          RestaurantsReservations: true,
          OutdoorSeating: false,
          BusinessAcceptsCreditCards: true,
          RestaurantsPriceRange2: 2,
          RestaurantsTableService: true,
          RestaurantsDelivery: false,
          Ambience: {
            romantic: false, intimate: false, classy: false, hipster: false, divey: false, touristy: false, trendy: false, upscale: false, casual: false,
          },
          RestaurantsTakeOut: true,
          GoodForKids: true,
          WheelchairAccessible: true,
          BusinessParking: {
            garage: false, street: false, validated: false, lot: true, valet: false,
          },
        },
        hours: {
          Monday: '11:00-22:00', Tuesday: '11:00-22:00', Friday: '11:00-23:00', Wednesday: '11:00-22:00', Thursday: '11:00-22:00', Sunday: '11:00-22:00', Saturday: '11:00-23:00',
        },
        __v: 0,
      }, {
        categories: ['Steakhouses', 'American (Traditional)', 'Restaurants'],
        _id: '5ad3bf12bf18e506f0efc4eb',
        business_id: '07AZL5XenCQ_-op_onKLdw',
        name: 'BLT Steak',
        neighborhood: 'The Strip',
        address: '3645 Las Vegas Blvd S',
        city: 'Las Vegas',
        state: 'NV',
        postal_code: '89109',
        latitude: 36.113669,
        longitude: -115.168933,
        stars: 4,
        review_count: 482,
        is_open: 1,
        attributes: {
          RestaurantsTableService: true,
          GoodForMeal: {
            dessert: false, latenight: false, lunch: false, dinner: true, breakfast: false, brunch: false,
          },
          Alcohol: 'full_bar',
          Caters: false,
          HasTV: true,
          RestaurantsGoodForGroups: true,
          NoiseLevel: 'average',
          WiFi: 'no',
          RestaurantsAttire: 'casual',
          RestaurantsReservations: true,
          OutdoorSeating: false,
          BusinessAcceptsCreditCards: true,
          RestaurantsPriceRange2: 3,
          BikeParking: false,
          RestaurantsDelivery: false,
          Ambience: {
            romantic: false, intimate: false, classy: false, hipster: false, divey: false, touristy: false, trendy: false, upscale: true, casual: false,
          },
          RestaurantsTakeOut: true,
          GoodForKids: false,
          WheelchairAccessible: true,
          BusinessParking: {
            garage: true, street: false, validated: false, lot: false, valet: true,
          },
        },
        hours: {
          Monday: '17:00-22:00', Tuesday: '17:00-22:00', Friday: '17:00-22:30', Wednesday: '17:00-22:00', Thursday: '17:00-22:00', Sunday: '17:00-22:00', Saturday: '17:00-22:30',
        },
        __v: 0,
      }],
    });
  });
  it('should render without throwing an error', () => {
    expect(wrapper.exists(<div className="nearMeContainer" />)).toBe(true);
  });
  it('all businesses should render in modal', () => {
    expect(wrapper.find('.nearMeModalItem').length).toBe(4);
  });
  it('only 3 businesses should render in list', () => {
    expect(wrapper.find('.nearMeListItem').length).toBe(3);
  });
});
