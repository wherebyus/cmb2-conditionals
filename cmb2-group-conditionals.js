jQuery( document ).ready(function($) {


	if ($('input#_wbu_post_styles_style6').is('checked')) {
            document.getElementById('_wbu_post_styles_list_group_repeat').style.display = 'block';
            document.querySelector('.cmb-repeat-group-wrap').style.display = 'block';
        }
    else {
		document.getElementById('_wbu_post_styles_list_group_repeat').style.display = 'none';
    	document.querySelector('.cmb-repeat-group-wrap').style.display = 'none';			
	};

    if ($('input#_wbu_post_styles_style11').is('checked')) {
        document.getElementById('_wbu_post_styles_education_list_group_repeat').style.display = 'block';
        document.querySelector('.cmb2-id--wbu-post-styles-education-list-group').style.display = 'block';
        document.getElementById('_wbu_post_styles_experience').style.display = 'block';
        document.querySelector('.cmb2-id--wbu-post-styles-experience').style.display = 'block';
        }
    else {
        document.getElementById('_wbu_post_styles_education_list_group_repeat').style.display = 'none';
        document.querySelector('.cmb2-id--wbu-post-styles-education-list-group').style.display = 'none';
        document.getElementById('_wbu_post_styles_experience').style.display = 'none';
        document.querySelector('.cmb2-id--wbu-post-styles-experience').style.display = 'none';             
    };
 
    if ($('input#_wbu_post_styles_style12').prop('checked', true)) {
        document.getElementById('_wbu_post_styles_political_race_group_repeat').style.display = 'block';
        document.querySelector('.cmb2-id--wbu-post-styles-political-race-group').style.display = 'block';
        }
    else {
        document.getElementById('_wbu_post_styles_political_race_group_repeat').style.display = 'none';
        document.querySelector('.cmb2-id--wbu-post-styles-political-race-group').style.display = 'none';            
    };


    $('input#_wbu_post_styles_style6').change(function() {
        if ($(this).prop('checked', true)) {
            document.getElementById('_wbu_post_styles_list_group_repeat').style.display = 'block';
            document.querySelector('.cmb-repeat-group-wrap').style.display = 'block';
        }
    });

    $('input#_wbu_post_styles_style11').change(function() {
        if ($(this).prop('checked', true)) {
            document.getElementById('_wbu_post_styles_education_list_group_repeat').style.display = 'block';
            document.querySelector('.cmb2-id--wbu-post-styles-education-list-group').style.display = 'block';
            document.getElementById('_wbu_post_styles_experience').style.display = 'block';
            document.querySelector('.cmb2-id--wbu-post-styles-experience').style.display = 'block';         
        }
    });

    $('input#_wbu_post_styles_style12').change(function() {
        if ($(this).prop('checked', true)) {
            document.getElementById('_wbu_post_styles_political_race_group_repeat').style.display = 'block';
            document.querySelector('.cmb2-id--wbu-post-styles-political-race-group').style.display = 'block';         
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

    $('input#_wbu_post_styles_style7').change(function() {
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

    $('input#_wbu_post_styles_style9').change(function() {
        if ($(this).prop('checked', true)) {
            document.getElementById('list_group_repeat').style.display = 'none';
            document.querySelector('.cmb-repeat-group-wrap').style.display = 'none';
        }
    });
    $('input#_wbu_post_styles_style10').change(function() {
        if ($(this).prop('checked', true)) {
            document.getElementById('list_group_repeat').style.display = 'none';
            document.querySelector('.cmb-repeat-group-wrap').style.display = 'none';
        }
    });
    $('input#_wbu_post_styles_style11').change(function() {
        if ($(this).prop('checked', true)) {
            document.getElementById('list_group_repeat').style.display = 'none';
            document.querySelector('.cmb-repeat-group-wrap').style.display = 'none';
        }
    });
});