jQuery( document ).ready(function($) {


	if ($('input#_wbu_post_styles_style7').is('checked')) {
            document.getElementById('_wbu_post_styles_list_group_repeat').style.display = 'block';
            document.querySelector('.cmb-repeat-group-wrap').style.display = 'block';
        }
    else {
		document.getElementById('_wbu_post_styles_list_group_repeat').style.display = 'none';
    	document.querySelector('.cmb-repeat-group-wrap').style.display = 'none';			
	};
 

    $('input#_wbu_post_styles_style7').change(function() {
        if ($(this).prop('checked', true)) {
            document.getElementById('_wbu_post_styles_list_group_repeat').style.display = 'block';
            document.querySelector('.cmb-repeat-group-wrap').style.display = 'block';
        }
    });

    $('input#_wbu_post_styles_style1').change(function() {
        if ($(this).prop('checked', true)) {
            document.getElementById('_wbu_post_styles_list_group_repeat').style.display = 'none';
            document.querySelector('.cmb-repeat-group-wrap').style.display = 'none';
        }
    });

    $('input#_wbu_post_styles_style2').change(function() {
        if ($(this).prop('checked', true)) {
            document.getElementById('_wbu_post_styles_list_group_repeat').style.display = 'none';
            document.querySelector('.cmb-repeat-group-wrap').style.display = 'none';
        }
    });

    $('input#_wbu_post_styles_style3').change(function() {
        if ($(this).prop('checked', true)) {
            document.getElementById('_wbu_post_styles_list_group_repeat').style.display = 'none';
            document.querySelector('.cmb-repeat-group-wrap').style.display = 'none';
        }
    });

    $('input#_wbu_post_styles_style4').change(function() {
        if ($(this).prop('checked', true)) {
            document.getElementById('_wbu_post_styles_list_group_repeat').style.display = 'none';
            document.querySelector('.cmb-repeat-group-wrap').style.display = 'none';
        }
    });

    $('input#_wbu_post_styles_style5').change(function() {
        if ($(this).prop('checked', true)) {
            document.getElementById('_wbu_post_styles_list_group_repeat').style.display = 'none';
            document.querySelector('.cmb-repeat-group-wrap').style.display = 'none';
        }
    });

    $('input#_wbu_post_styles_style6').change(function() {
        if ($(this).prop('checked', true)) {
            document.getElementById('_wbu_post_styles_list_group_repeat').style.display = 'none';
            document.querySelector('.cmb-repeat-group-wrap').style.display = 'none';
        }
    });

    $('input#_wbu_post_styles_style8').change(function() {
        if ($(this).prop('checked', true)) {
            document.getElementById('list_group_repeat').style.display = 'none';
            document.querySelector('.cmb-repeat-group-wrap').style.display = 'none';
        }
    });
});