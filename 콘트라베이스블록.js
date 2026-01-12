//비밀아이디님의 콘트라베이스블록 보완버전
Entry.staticBlocks = [
    {
        category: 'start',
        blocks: [
            'when_run_button_click',
            'when_some_key_pressed',
            'mouse_clicked',
            'mouse_click_cancled',
            'when_object_click',
            'when_object_click_canceled',
            'when_message_cast',
            'message_cast',
            'message_cast_wait',
            'when_scene_start',
            'start_scene',
            'start_neighbor_scene',
            'check_object_property',
            'check_block_execution',
            'switch_scope',
            'is_answer_submited',
            'check_lecture_goal',
            'check_variable_by_name',
            'show_prompt',
            'check_goal_success',
            'positive_number',
            'negative_number',
            'wildcard_string',
            'wildcard_boolean',
            'register_score',
        ],
    },
    {
        category: 'flow',
        blocks: [
            'wait_second',
            'repeat_basic',
            'repeat_inf',
            'repeat_while_true',
            'stop_repeat',
            '_if',
            'if_else',
            'wait_until_true',
            'stop_object',
            'restart_project',
            'when_clone_start',
            'create_clone',
            'delete_clone',
            'remove_all_clones',
        ],
    },
    {
        category: 'moving',
        blocks: [
            'move_direction',
            'bounce_wall',
            'move_x',
            'move_y',
            'move_xy_time',
            'locate_x',
            'locate_y',
            'locate_xy',
            'locate_xy_time',
            'locate',
            'locate_object_time',
            'rotate_relative',
            'direction_relative',
            'rotate_by_time',
            'direction_relative_duration',
            'rotate_absolute',
            'direction_absolute',
            'see_angle_object',
            'move_to_angle',
        ],
    },
    {
        category: 'looks',
        blocks: [
            'show',
            'hide',
            'dialog_time',
            'dialog',
            'remove_dialog',
            'change_to_some_shape',
            'change_to_next_shape',
            'add_effect_amount',
            'change_effect_amount',
            'erase_all_effects',
            'change_scale_size',
            'set_scale_size',
            'flip_x',
            'flip_y',
            'change_object_index',
        ],
    },
    {
        category: 'brush',
        blocks: [
            'brush_stamp',
            'start_drawing',
            'stop_drawing',
            'set_color',
            'set_random_color',
            'change_thickness',
            'set_thickness',
            'change_brush_transparency',
            'set_brush_tranparency',
            'brush_erase_all',
        ],
    },
    {
        category: 'text',
        blocks: ['text_read', 'text_write', 'text_append', 'text_prepend', 'text_flush'],
    },
    {
        category: 'sound',
        blocks: [
            'sound_something_with_block',
            'sound_something_second_with_block',
            'sound_from_to',
            'sound_something_wait_with_block',
            'sound_something_second_wait_with_block',
            'sound_from_to_and_wait',
            'sound_volume_change',
            'sound_volume_set',
            'sound_silent_all',
        ],
    },
    {
        category: 'judgement',
        blocks: [
            'is_clicked',
            'is_press_some_key',
            'reach_something',
            'boolean_basic_operator',
            'boolean_and_or',
            'boolean_not',
        ],
    },
    {
        category: 'calc',
        blocks: [
            'calc_basic',
            'calc_rand',
            'coordinate_mouse',
            'coordinate_object',
            'get_sound_volume',
            'quotient_and_mod',
            'calc_operation',
            'get_project_timer_value',
            'choose_project_timer_action',
            'set_visible_project_timer',
            'get_date',
            'distance_something',
            'get_sound_duration',
            'get_user_name',
            'length_of_string',
            'combine_something',
            'char_at',
            'substring',
            'index_of_string',
            'replace_string',
            'change_string_case',
        ],
    },
    {
        category: 'variable',
        blocks: [
            'variableAddButton',
            'listAddButton',
            'ask_and_wait',
            'get_canvas_input_value',
            'set_visible_answer',
            'get_variable',
            'change_variable',
            'set_variable',
            'show_variable',
            'hide_variable',
            'value_of_index_from_list',
            'add_value_to_list',
            'remove_value_from_list',
            'insert_value_to_list',
            'change_value_list_index',
            'length_of_list',
            'is_included_in_list',
            'show_list',
            'hide_list',
        ],
    },
    {
        category: 'func',
        blocks: ['functionAddButton'],
    },
    {
        category: 'analysis',
        blocks: [
            'analizyDataAddButton',
            'append_row_to_table',
            'insert_row_to_table',
            'delete_row_from_table',
            'set_value_from_table',
            'get_table_count',
            'get_value_from_table',
            'calc_values_from_table',
            'open_table_chart',
            'close_table_chart',
        ],
    },
    {
        category: 'ai_utilize',
        blocks: [
            'aiUtilizeBlockAddButton',
            'aiUtilizeModelTrainButton',
            'audio_title',
            'check_microphone',
            'speech_to_text_convert',
            'speech_to_text_get_value',
            'get_microphone_volume',
            'tts_title',
            'read_text',
            'read_text_wait_with_block',
            'set_tts_property',
            'translate_title',
            'get_translated_string',
            'check_language',
            'video_title',
            'video_draw_webcam',
            'video_check_webcam',
            'video_flip_camera',
            'video_set_camera_opacity_option',
            'video_motion_value',
            'video_toggle_model',
            'video_is_model_loaded',
            'video_number_detect',
            'video_toggle_ind',
            'video_body_part_coord',
            'video_face_part_coord',
            'video_detected_face_info',
        ],
    },
    {
        category: 'expansion',
        blocks: [
            'expansionBlockAddButton',
            'weather_title',
            'check_weather',
            'check_finedust',
            'get_weather_data',
            'get_current_weather_data',
            'get_today_temperature',
            'check_city_weather',
            'check_city_finedust',
            'get_city_weather_data',
            'get_current_city_weather_data',
            'get_today_city_temperature',
            'festival_title',
            'count_festival',
            'get_festival_info',
            'behaviorConductDisaster_title',
            'count_disaster_behavior',
            'get_disaster_behavior',
            'behaviorConductLifeSafety_title',
            'count_lifeSafety_behavior',
            'get_lifeSafety_behavior',
        ],
    },
    {
        category: 'arduino',
        blocks: [
            'arduino_reconnect',
            'arduino_open',
            'arduino_cloud_pc_open',
            'arduino_connect',
            'arduino_download_connector',
            'download_guide',
            'arduino_download_source',
            'arduino_noti',
        ].concat(EntryStatic.DynamicHardwareBlocks),
    }
];
EntryStatic.getAllBlocks = () => {
    return Entry.staticBlocks;
}
const updateCategory = (category, options) => {
    Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
        { category: 'start', visible: true },
        { category: 'flow', visible: true },
        { category: 'moving', visible: true },
        { category: 'looks', visible: true },
        { category: 'brush', visible: true },
        { category: 'text', visible: true },
        { category: 'sound', visible: true },
        { category: 'judgement', visible: true },
        { category: 'calc', visible: true },
        { category: 'variable', visible: true },
        { category: 'func', visible: true },
        { category: 'analysis', visible: true },
        { category: 'ai_utilize', visible: true },
        { category: 'expansion', visible: true },
        { category: 'arduino', visible: false },
        { category: category, visible: true }
    ]);
    for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
        if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == 'entryCategorytext')) {
            $($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
        }
    }
    Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
    Entry.playground.blockMenu._generateCategoryCode(category);
    if (options) {
        if (options.background) {
            $(`#entryCategory${category}`).css('background-image', 'url(' + options.background + ')');
            $(`#entryCategory${category}`).css('background-repeat', 'no-repeat');
            if (options.backgroundSize) {
                $(`#entryCategory${category}`).css('background-size', options.backgroundSize + 'px');
            }
        }
        if (options.name) {
            $(`#entryCategory${category}`)[0].innerText = options.name
        }
    }
}
const addBlock = (blockname, template, color, params, _class, func, skeleton = 'basic') => {
    Entry.block[blockname] = {
        color: color.color,
        outerLine: color.outerline,
        skeleton: skeleton,
        statement: [],
        params: params.params,
        events: {},
        def: {
            params: params.def,
            type: blockname
        },
        paramsKeyMap: params.map,
        class: _class ? _class : 'default',
        func: func,
        template: template,
    }
}
const c1 = '#000000'; ///color
const c2 = '#000000'; ///outerline
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('cb_scene', '%1 만일 %2 이라면 아래 코드 실행하기', /*/블랙 쌍절곤/*/{
    color: c1,
    outerline: c2,
}, {
    params: [
        {
            type: 'Indicator',
            img: 'block_icon/hardware_icon.svg',
            size: 14,
            position: {
                x: 0,
                y: -2,
            },
        },
        {
            type: 'Block',
            accept: 'string',
            value: '장면 1',
        },
    ],
    def: [],
    map: {
        CONTENT: 0, //CONTENT는 %1임 그 0은 %(숫자)-1번째라는 뜻 그냥 %1이면 0, %2이면 1 이런식임
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
//코드 입력하세요
}, 'basic_event')
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('cb_log', '콘솔에 %1 입력 (파괴적)', {
    color: c1,
    outerline: c2,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
        },
    ],
    def: [
        {
            type: 'text',
            params: ['console.log("Hello World!");']
        },
    ],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
eval(content); //근데 eval 진짜 위험함 그냥 자바스크립트 최악의 함수임 웬만해서 쓰지마셈
}, 'basic') //원래 basic은 안써도 됨
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('cb_sig', '만일 신호 %1을 받았는가? %2', {
    color: c1,
    outerline: c2,
}, {
    params: [
        {
            type: 'Block',
            accept: 'string',
            value: '신호 1',
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon.svg',
            size: 11,
        },
    ],
    def: [],
    map: {
        CONTENT: 0,
    },
}, 'text', (sprite, script) => {
const content = script.getValue('CONTENT', script);
//코드 입력하세요
}, 'basic_boolean_field')
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('cb_vir', '만일 [ %1 ] 감지되었는가?', {
    color: c1,
    outerline: c2,
}, {
    params: [
        {
            type: 'Dropdown',
            options: [
                ['바이러스', 'virus'],
                ['트로이목마', 'trojan'], //예시입니다.
            ],
            value: 'virus',
            fontSize: 11,
            arrowColor: c1,
        }
    ],
    def: [],
    map: {
        TYPE: 0,
    },
}, 'text', (sprite, script) => {
const type = script.getValue('TYPE', script);
//코드 입력하세요
}, 'basic_boolean_field')
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('cb_clr', '콘솔 모두 삭제하기', /*/왜냐하면 엔트리 콘솔은 이제 작동을 안하기 때문/*/ {
    color: c1,
    outerline: c2,
}, {
    params: [],
    def: [],
    map: {},
}, 'text', (sprite, script) => {
console.clear();
},) ///이건 한줄만 쓰면 되는거라 구현했습니다.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Entry.staticBlocks.push({
    category: '콘트라베이스', blocks: [
        'cb_scene',
        'cb_log',
        'cb_sig',
        'cb_vir',
        'cb_clr',
    ]
});
updateCategory('콘트라베이스')
$('head').append(`<style> #entryCategory콘트라베이트 
{ background-image: url(이미지); 
 background-repeat: no-repeat; 
 border-bottom-right-radius: 6px; 
 border-bottom-left-radius: 6px; 
 margin-bottom: 1px; 
 } .entrySelectedCategory#entryCategory콘트라베이스 
  { background-image: 이미지; 
background-color: #000000;
border-color: #5f5f5f;
color: #ffffffff;
}
    } </style>
`)
$('#entryCategory콘트라베이스').append('콘트라베이스')
console.log("🎻 콘트라베이스 [강제 렌더링] 주입 완료.");

/***********************************************************************************************************************************
 * 이전 블록임. 혹시 몰라서 남겨둠
(function() {
    const C = 'ContraBAss';
    const B_IDS = ['cb_log', 'cb_sig', 'cb_vir', 'cb_clr'];

    // 1. 기존 데이터 초기화 (이건 안전빵)
    if (window.Entry && Entry.staticBlocks) {
        Entry.staticBlocks = Entry.staticBlocks.filter(c => c.category !== C);
    }

    // 2. 시작 블록 -> 블랙 쌍절곤
    const sb = Entry.block.when_run_button_click;
    if (sb) {
        sb.color = '#000000';
        sb.outerLine = '#000000';
        sb.template = '만일 [1장면] 이라면 아래 코드 실행하기  ━━━━  %1';
        sb.params = [{ type: 'Indicator', img: 'block_icon/hardware_03.svg', size: 14, direction: 'right' }];
    }

    // 3. 통합 블록 4종 정의
    const specs = {
        'cb_log': { t: '콘솔에 %1 입력 (파괴적)', s: 'basic', p: [{type:'Block', accept:'string'}] },
        'cb_sig': { t: '만일 신호 %1 을(를) 받았는가?', s: 'basic_boolean_lambda', p: [{type:'Indicator', img:'block_icon/start_icon.svg', size:11, direction:'right'}] },
        'cb_vir': { t: '만일 [바이러스] 감지되었는가?', s: 'basic_boolean_lambda', p: [] },
        'cb_clr': { t: '엔트리 콘솔 모두 삭제하기', s: 'basic', p: [] }
    };

    Object.keys(specs).forEach(id => {
        Entry.block[id] = {
            color: '#000000', outerLine: '#000000',
            skeleton: specs[id].s, template: specs[id].t, params: specs[id].p,
            class: C, def: { type: id },
            func: (s, sc) => { if(id === 'cb_clr') console.clear(); return sc.callReturn(); }
        };
    });

    // 4. [문제 해결 핵심] Entry.staticBlocks 대신 리스트를 완전히 새로 할당
    // push 대신 아예 리스트를 합쳐서 새로 정의해버립니다.
    const newCategory = { category: C, blocks: B_IDS };
    Entry.staticBlocks = [...Entry.staticBlocks, newCategory];

    // 5. 블랙 스타일 적용
    $('#c-st').remove();
    $('head').append(`<style id="c-st">
        #entryCategory${C}, #entryCategoryStart { background: #000 !important; color: #fff !important; }
    </style>`);

    // 6. [강제 리로드] 엔진에게 카테고리가 바뀌었다고 직접 신호 보내기
    if (Entry.playground && Entry.playground.mainWorkspace) {
        Entry.playground.refreshPlayground();
    }
    
    // 7. 카테고리 탭을 강제로 다시 그리게 만들기
    setTimeout(() => {
        if (typeof updateCategory === 'function') updateCategory(C);
        // 강제로 클릭해서 화면에 띄우기
        const target = document.querySelector(`.entryCategoryElement${C}`);
        if (target) target.click();
        else {
            // 이것도 안되면 마지막 수단: 첫 번째 카테고리 클릭했다가 돌아오기
            $(`.entryCategoryElementstart`).click();
            setTimeout(() => {
                const retry = document.getElementById(`entryCategory${C}`);
                if(retry) retry.click();
            }, 100);
        }
    }, 200);

    console.log("🎻 콘트라베이스 [강제 렌더링] 주입 완료.");
})();

****************************************************************************************************************************************/
