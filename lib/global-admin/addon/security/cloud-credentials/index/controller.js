import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { inject as service } from '@ember/service';
import layout from './template';

const HEADERS = [
  {
    name:           'name',
    sort:           ['name'],
    searchField:    'name',
    translationKey: 'generic.name',
    type:           'string',
  },
  {
    classNames:     'text-right pr-20',
    name:           'created',
    sort:           ['created'],
    translationKey: 'generic.created',
  },
];

export default Controller.extend({
  modal:             service(),

  layout,
  sortBy:            'name',
  searchText:        '',
  extraSearchFields: ['displayType'],
  headers:           HEADERS,

  actions: {
    addCloudKey() {
      this.modal.toggleModal('modal-add-cloud-credential');
    }
  },

  filteredContent: computed('model.@each.{id}', function() {
    return get(this, 'model').sortBy('id');
  }),
});
