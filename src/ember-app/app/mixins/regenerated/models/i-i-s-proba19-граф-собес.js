import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  тЧГрафСобес: DS.hasMany('i-i-s-proba19-т-ч-граф-собес', { inverse: 'графСобес', async: false })
});

export let ValidationRules = {
  тЧГрафСобес: {
    descriptionKey: 'models.i-i-s-proba19-граф-собес.validations.тЧГрафСобес.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафСобесE', 'i-i-s-proba19-граф-собес', {
    тЧГрафСобес: hasMany('i-i-s-proba19-т-ч-граф-собес', 'График собеседований', {
      планирСобес: belongsTo('i-i-s-proba19-планир-собес', 'ФИО', {
        регистАнкеты: belongsTo('i-i-s-proba19-регист-анкеты', '', {
          фИОКандидата: attr('ФИО', { index: 0 }),
          вакантДолжн: belongsTo('i-i-s-proba19-вакант-должн', '', {
            должности: attr('Вакантная должность', { index: 1 })
          }, { index: -1, hidden: true })
        }, { index: -1, hidden: true }),
        иметьПриСебе: attr('Иметь при себе', { index: 3, hidden: true }),
        датаПланСобес: attr('Дата Планир Соб', { index: 4 })
      }, { index: 2 })
    })
  });

  modelClass.defineProjection('ГрафСобесL', 'i-i-s-proba19-граф-собес', {
    
  });
};
