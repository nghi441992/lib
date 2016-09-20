Util.syncHeightLi = function (ul_id) {
    var li_height = 0;
    jQuery('#'+ul_id).find('li').each(function() {
        if (li_height < jQuery(this).height()) {
            li_height = jQuery(this).height();
        }
    });
    if (li_height > 0) {
        jQuery('#' + ul_id+' li').height(li_height);
    }
};