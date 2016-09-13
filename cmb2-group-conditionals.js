jQuery( document ).ready(function($) {
   $('input[type="radio"]').click(function() {
       if($(this).attr('value') == 'link-list') {
            $('#_wbu_post_styles_list_group_repeat').show();
            $('.cmb2-id--wbu-post-styles-list-group').show();

       }

       else {
            $('#_wbu_post_styles_list_group_repeat').hide(); 
            $('.cmb2-id--wbu-post-styles-list-group').hide();    
       }
   });

    $('input[type="radio"]').click(function() {
       if($(this).attr('value') == 'single-voter-guide') {
            $('#_wbu_post_styles_education_list_group_repeat').show(); 
            $('.cmb2-id--wbu-post-styles-education-list-group').show();            
       }

       else {
            $('#_wbu_post_styles_education_list_group_repeat').hide();
            $('.cmb2-id--wbu-post-styles-education-list-group').hide();        
       }
   });

    $('input[type="radio"]').click(function() {
       if($(this).attr('value') == 'main-voter-guide') {
            $('#_wbu_post_styles_political_race_group_repeat').show(); 
            $('.cmb2-id--wbu-post-styles-political-race-group').show();            
       }

       else {
            $('#_wbu_post_styles_political_race_group_repeat').hide();
            $('.cmb2-id--wbu-post-styles-political-race-group').hide();        
       }
   });
    

});