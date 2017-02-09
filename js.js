$(document).ready(function() {


    // $("#Display").bind('click', function() {
    //     getFeed("https://twitrss.me/twitter_user_to_rss/?user=AffinityWater",
    //             showFeed);
    // });   


    // $("#Bristol").bind('click', function() {
    //     getFeed("https://twitrss.me/twitter_user_to_rss/?user=BristolWater",
    //             showBristolFeed);
    // });    


});

    function DisplayFeeds(wholesaler) {

    let wholesalerfeed = '';

        switch(wholesaler) {
            case "Affinity":
                 wholesalerfeed = "AffinityWater";
                break;
            case "Bristol":
                 wholesalerfeed = "BristolWater";
                break;            
            case "Cambridge":
                 wholesalerfeed = "cambswater";
                break;            
            case "EssexSuffolk":
                 wholesalerfeed = "eswater_care";
                break;            
            case "Hartlepool":
                 wholesalerfeed = "hartlepoolwater";
                break;            
            case "ScottishWater":
                 wholesalerfeed = "scottish_water";
                break;            
            case "portsmouth":
                 wholesalerfeed = "PortsmouthWater";
                break;           
            case "Thames":
                 wholesalerfeed = "thameswater";
                break;            
            case "SouthEast":
                 wholesalerfeed = "sewateruk";
                break;            
            case "SouthStaffs":
                 wholesalerfeed = "sthstaffswater";
                break;            
            case "SouthEastSurrey":
                 wholesalerfeed = "seswater";
                break;            
            case "AnglianWater":
                 wholesalerfeed = "AnglianWater";
                break;            
            case "DwrCymru":
                 wholesalerfeed = "DwrCymru";
                break;            
            case "NorthernIreland":
                 wholesalerfeed = "niwnews";
                break;            
            case "Northumbrian":
                 wholesalerfeed = "nwater_care";
                break;            
            case "SevernTrent":
                 wholesalerfeed = "stwater";
                break;
            case "SouthWestWater":
                 wholesalerfeed = "SouthWestWater";
                break;            
            case "SouthernWater":
                 wholesalerfeed = "SouthernWater";
                break;            
            case "unitedutilities":
                 wholesalerfeed = "unitedutilities";
                break;            
            case "wessexwater":
                 wholesalerfeed = "wessexwater";
                break;            
            case "YorkshireWater":
                 wholesalerfeed = "YorkshireWater";
                break;            
            case "albionwater":
                 wholesalerfeed = "albionwater";
                break;            
            case "SSE":
                 wholesalerfeed = "SSE";
                break;            
            case "veoliauk":
                 wholesalerfeed = "veoliauk";
                break;
            default:
                 wholesalerfeed = "AffinityWater";
        }

        getFeed("https://twitrss.me/twitter_user_to_rss/?user=" + wholesalerfeed,
                showFeed);  

    };

function getFeed(url, success){
    if(window.navigator.onLine) {

    $.get(url, function(feeds) {
            success($(feeds).find("item")
        );
    });
                                                                                                            // $.jGFeed(url, function(feeds) {
                                                                                                            //     // Check for errors
                                                                                                            //     if(!feeds){
                                                                                                            //         // there was an error                    /// WORKING SECTION WITH GOOGLE FEEDS API
                                                                                                            //         return false;
                                                                                                            //     } else {                                                                                                      //         localStorage.setItem(url, JSON.stringify(feeds));
                                                                                                    // });
    } else {
        // Get the fall-back...
        var feed = JSON.parse(localStorage.getItem(url));
        if(feed && feed.length > 0) {
            success(feed.title, feed.entries);
        }
    }
}


function showFeed(item) {
    console.log(item);
    //showing and hiding other divs
    // $("#Thamesdiv").hide();
    // $("#ScottishWaterdiv").hide();
    // $("#Portsmouthdiv").hide();
     $("#Displaydiv").show();
    //     console.log(title);
    //     console.log(item);
    // $("#PortsmouthTitle").text(title.substring(17)  );
    var list = $("#DisplayList");
    list.empty();
    for(var index = 0; index < item.length; index += 1) {
        list.append(formatItem(item[index]));
    }
}


function showAnyFeed(title, items) {
    $("#anyTitle").text(title);
    var list = $("#anyList");
    list.empty();
    for(var index = 0; index < items.length; index += 1) {
        list.append(formatItem(items[index]));
    }
}


function formatItem(item) {
    var a = $(item).find("a");
    var listItem = document.createElement("button"),
    anchor = document.createElement("a");
    anchor.setAttribute("href", $(item).find("link").text());
    listItem.setAttribute("button", 'button');
    listItem.setAttribute("href", $(item).find("link").text());
    listItem.setAttribute("class", 'list-group-item');
    listItem.innerText = $(item).find("title").text();
    anchor.innerHTML = listItem.outerHTML;
    return anchor.outerHTML;
}