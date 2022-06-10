type FoodShare = {
  location: string;
  volunteerStartTime: string;
  distributionStartTime: string;
  dayOfTheWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  href: string;
  distributionType: "Walk Up" | "Drive Up" | "Drive or Walk Up";
  mapUrl: string;
  address: string;
};

export const foodShares: FoodShare[] = [
  {
    location: "Hempstead",
    volunteerStartTime: "2:00 PM",
    distributionStartTime: "3:30 PM",
    dayOfTheWeek: 0,
    href: "https://communitysolidarity.org/foodshares/hempstead",
    distributionType: "Drive or Walk Up",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.4350875168357!2d-73.62311638378901!3d40.708437579332276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27d1b79660e51%3A0x4b8116c45c66fece!2sCooper%20Square%20N%20%26%20Washington%20St%2C%20Hempstead%2C%20NY%2011550!5e0!3m2!1sen!2sus!4v1653416514456!5m2!1sen!2sus",
    address: "Cooper Square N & Washington St, Hempstead, NY 11550",
  },
  // https://goo.gl/maps/neh4w2BHah7cQRxG8
  {
    location: "Huntington",
    volunteerStartTime: "7:00 PM",
    distributionStartTime: "8:15 PM",
    dayOfTheWeek: 2,
    href: "https://communitysolidarity.org/foodshares/huntington",
    distributionType: "Drive Up",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.0328447403576!2d-73.4104582837864!3d40.849202679317195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e828f2cdcd6647%3A0xe3ec3ed3ea9388c3!2sFairground%20Ave%20%26%20E%206th%20St%2C%20Huntington%20Station%2C%20NY%2011746!5e0!3m2!1sen!2sus!4v1653416077120!5m2!1sen!2sus",
    address: "Fairground Ave & E 6th St, Huntington, NY 11743",
  },
  {
    location: "Farmingville",
    volunteerStartTime: "7:00 PM",
    distributionStartTime: "8:15 PM",
    dayOfTheWeek: 4,
    href: "https://communitysolidarity.org/foodshares/farmingville",
    distributionType: "Drive Up",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.86067352326!2d-73.03059768378672!3d40.831023879319176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e846381f248f4f%3A0x9b59706057887c34!2sHorseblock%20Road%20%26%20Woodycrest%20Dr%2C%20Farmingville%2C%20NY%2011738!5e0!3m2!1sen!2sus!4v1653416655507!5m2!1sen!2sus",
    address: "Horseblock Road & Woodycrest Dr, Farmingville, NY 11738",
  },
  {
    location: "Wyandanch",
    volunteerStartTime: "11:45 AM",
    distributionStartTime: "12:00 PM",
    dayOfTheWeek: 5,
    href: "https://communitysolidarity.org/foodshares/wyandanch",
    distributionType: "Walk Up",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.1888541727474!2d-73.36251896830501!3d40.75371659856637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e82c7a80bf7431%3A0x87f8638ed71c075c!2sLong%20Island%20Ave%20%26%20Garden%20City%20Ave%2C%20Wyandanch%2C%20NY%2011798!5e0!3m2!1sen!2sus!4v1653425644875!5m2!1sen!2sus",
    address: "Long Island Ave & Garden City Avenue, Wyandanch, NY",
  },
  {
    location: "Bedstuy",
    volunteerStartTime: "3:00 PM",
    distributionStartTime: "3:45 PM",
    dayOfTheWeek: 5,
    href: "https://communitysolidarity.org/foodshares/bedstuy",
    distributionType: "Walk Up",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.2611511333807!2d-73.95037788378929!3d40.690245779334305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b92af5dbc39%3A0xe64e94960201ab6b!2sMarcy%20Ave%20%26%20Lafayette%20Ave%2C%20Brooklyn%2C%20NY%2011216!5e0!3m2!1sen!2sus!4v1653425272423!5m2!1sen!2sus",
    address: "Marcy Ave & Lafayette Ave, Brooklyn, NY 11216",
  },
];
