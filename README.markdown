# TimelineJS 

## modify
1. remove unused code to reduce size (only support json)
2. support multi media
3. add jQuery template support to slider

## Document history with TimelineJS

There are lots of timeline tools on the web but they are almost all either
hard on the eyes or hard to use. Create timelines that are at the same time
beautiful and intuitive for users

TimelineJS is great for pulling in media from different sources. Just throw in a
link from Twitter, YouTube, Flickr, Vimeo, Google Maps or SoundCloud and
TimelineJS will format it to fit perfectly. More media types will be supported
in the future.

Creating one is as easy as filling in a Google spreadsheet or as detailed as
JSON.
 
## Add it to your site
### Using Inline (*easiest*)
Place the embed code where you want the timeline to show in the `<body>` of your site. See [Config Options](#config-options) for a full list of what you can set in the config.

```html
	<div id="timeline"></div>
	<script type="text/javascript">
	    var timeline_config = {
			width:				'100%',
			height:				'600',
			source:				'path_to_json/or_link_to_googlespreadsheet',
			start_at_end: 		false,							//OPTIONAL START AT LATEST DATE
			start_at_slide:		'4',							//OPTIONAL START AT SPECIFIC SLIDE
			start_zoom_adjust:	'3',							//OPTIONAL TWEAK THE DEFAULT ZOOM LEVEL
			hash_bookmark:		true,							//OPTIONAL LOCATION BAR HASHES
			font:				'Bevan-PotanoSans',				//OPTIONAL FONT
			debug:				true,							//OPTIONAL DEBUG TO CONSOLE
			lang:				'fr',							//OPTIONAL LANGUAGE
		}

        var timeline = new VMM.Timeline("#timeline", 800, 600);
        timeline.init(timeline_config);
	</script>
```
	
## Config Options
Here are some of the options you can set in the config.

### Language
`lang`
Localization
*default is en*
Languages available:
* `en` *English*
* `zh-cn` *中文*

###Start at End 
`start_at_end`
set to true to start the timeline on the last date.
*default is false*

###Start at Slide 
`start_at_slide`
You can tell TimelineJS to start at a specific slide number
*default is 0*

###Start Zoom Adjust
`start_zoom_adjust`
This will tweak the default zoom level. Equivilent to pressing the zoom in or zoom out button the specified number of times. Negative numbers zoom out.
*default is 0*

###Hash Bookmark 
`hash_bookmark`
set to true to allow bookmarking slides using the hash tag
*default is false*

###Debug 
`debug`
Will log events etc to the console.
*default is false*

## File Formats

### JSON:

JSON is the native data format for TimelineJS.

Remember, JSON is it is picky. A misplaced comma or quotation mark can
prevent the timeline from loading properly. 

Here is the full model:
```javascript

{
	"timeline":
	{
		"headline":"The Main Timeline Headline Goes here",
		"type":"default",
		"text":"<p>Intro body text goes here, some HTML is ok</p>",
		"assets": [
            {
			"media":"http://yourdomain_or_socialmedialink_goes_here.jpg",
			"credit":"Credit Name Goes Here",
			"caption":"Caption text goes here"
		    }
        ],
		"date": [
			{
				"startDate":"2011,12,10",
				"endDate":"2011,12,11",
				"headline":"Headline Goes Here",
				"text":"<p>Body text goes here, some HTML is OK</p>",
				"tag":"This is Optional",
				"assets": [{
					"media":"http://twitter.com/ArjunaSoriano/status/164181156147900416",
					"thumbnail":"optional-32x32px.jpg",
					"credit":"Credit Name Goes Here",
					"caption":"Caption text goes here"
				}]
			}
		],
		"era": [
			{
				"startDate":"2011,12,10",
				"endDate":"2011,12,11",
				"headline":"Headline Goes Here",
				"text":"<p>Body text goes here, some HTML is OK</p>",
				"tag":"This is Optional"
			}
			
		]
	}
}
```

### JSONP :

Timeline can use a variation of JSONP to allow you to easily load data across different domains.

To allow this to happen, the file must end with the extention `.jsonp`

Here is the full model:
```javascript
storyjs_jsonp_data = {
	"timeline":
	{
		"headline":"The Main Timeline Headline Goes here",
		"type":"default",
		"text":"<p>Intro body text goes here, some HTML is ok</p>",
		"assets": [{
			"media":"http://yourdomain_or_socialmedialink_goes_here.jpg",
			"credit":"Credit Name Goes Here",
			"caption":"Caption text goes here"
		}],
		"date": [
			{
				"startDate":"2011,12,10",
				"endDate":"2011,12,11",
				"headline":"Headline Goes Here",
				"text":"<p>Body text goes here, some HTML is OK</p>",
				"tag":"This is Optional",
				"assets": [{
					"media":"http://twitter.com/ArjunaSoriano/status/164181156147900416",
					"thumbnail":"optional-32x32px.jpg",
					"credit":"Credit Name Goes Here",
					"caption":"Caption text goes here"
				}]
			}
		],
		"era": [
			{
				"startDate":"2011,12,10",
				"endDate":"2011,12,11",
				"headline":"Headline Goes Here",
				"tag":"This is Optional"
			}
			
		],
		"chart": [
			{
				"startDate":"2011,12,10",
				"endDate":"2011,12,11",
				"headline":"Headline Goes Here",
				"value":"28"
			}
			
		]
		
	}
}
```


## Best practices

Tips and tricks to best utilize TimelineJS

  1. Keep it light - don’t get bogged down by text or other elements
  2. Pick stories that have a strong chronological narrative. It does not work well for stories that need to jump around in the timeline.
  3. Include events that build up to major occurrences, not just the major events.
  4. Don't overwhelm the user. A timeline with hundreds of events is probably not the best use of the format.
  
## License
This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.


