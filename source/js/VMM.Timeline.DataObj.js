/*	TIMELINE SOURCE DATA PROCESSOR
================================================== */

if (typeof VMM.Timeline !== 'undefined' && typeof VMM.Timeline.DataObj == 'undefined') {
	VMM.Timeline.DataObj = {
		data_obj: {},
		model_array: [],
		getData: function (raw_data) {
			VMM.Timeline.DataObj.data_obj = {};
			VMM.fireEvent(global, VMM.Timeline.Config.events.messege, VMM.Timeline.Config.language.messages.loading_timeline);
			if (type.of(raw_data) == "object") {
				trace("DATA SOURCE: JSON OBJECT");
				VMM.Timeline.DataObj.parseJSON(raw_data);
            } else if (type.of(raw_data) == "string") {
                trace("DATA SOURCE: JSON URL " + raw_data);
                VMM.getJSON(raw_data + "?callback=onJSONP_Data", VMM.Timeline.DataObj.parseJSON);
            } else {
				trace("UNKNOW DATA SOURCE: " + raw_data);
			}
			
		},
		
		onJSONPLoaded: function() {
			trace("JSONP IS LOADED");
			VMM.fireEvent(global, VMM.Timeline.Config.events.data_ready, storyjs_jsonp_data);
		},
		
		parseJSON: function(d) {
			trace("parseJSON");
			if (d.timeline.type == "default") {
				trace("DATA SOURCE: JSON STANDARD TIMELINE");
				VMM.fireEvent(global, VMM.Timeline.Config.events.data_ready, d);
			} else {
				trace("DATA SOURCE: UNKNOWN JSON");
				trace(type.of(d.timeline));
			};
		},
		
		/*	TEMPLATE OBJECTS
		================================================== */
		data_template_obj: {  "timeline": { "headline":"", "description":"", "asset": { "media":"", "credit":"", "caption":"" }, "date": [], "era":[] } },
		date_obj: {"startDate":"2012,8,29,10,25", "headline":"", "text":"", "asset": {"media":"", "credit":"", "caption":"" }, "tags":""}
	};
	
}
