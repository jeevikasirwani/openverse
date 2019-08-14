import {
  SEND_SEARCH_QUERY_EVENT,
  SEND_RESULT_CLICKED_EVENT,
  SEND_DETAIL_PAGE_EVENT,
} from './action-types';

const actions = UsageDataService => ({
  [SEND_SEARCH_QUERY_EVENT](context, params) {
    UsageDataService.sendSearchQueryEvent(params);
  },
  [SEND_RESULT_CLICKED_EVENT](context, params) {
    UsageDataService.sendResultClickedEvent(params);
  },
  [SEND_DETAIL_PAGE_EVENT](context, params) {
    UsageDataService.sendDetailPageEvent(params);
  },
});

export default {
  actions,
};
