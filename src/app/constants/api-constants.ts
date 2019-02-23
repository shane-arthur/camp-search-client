export const apiUrls = {
  BASE_URL: 'http://localhost:4000',
  CAMP_SEARCH: '/search/activity',
  GET_ACTIVITIES: '/activities',
  GET_CAMPS_PER_ACTIVITY: (activityId: string) => `/activity-category/${activityId}`
};
