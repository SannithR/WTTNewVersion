use fetch to implement api integration and call the endpoint apiUrl = 'https://tabletennisapitest.azurewebsites.net/Players/GetPlayers'; 
and take api key from .env file. use the get method along with  headers: {
          "ApiKey": apiKey,
          "Content-Type": "application/json",
          "Accept": "application/json"
        }, also add api timeout 5mins. 
and  API response structure look like this:
{
    "Version": "0.1.0",
    "Source": "ITTF/WTT",
    "System": "Table tennis Sports Data API",
    "StatusCode": 200,
    "RequestId": "5acb6571-e425-4a5b-b498-f03deeebaa43",
    "ResponseDate": "5/8/2025",
    "ResponseTime": "6:01:30 AM",
    "Result": [
        {
            "IttfId": "916",
            "PlayerName": "imad MERHEB",
            "PlayerGivenName": "imad",
            "PlayerFamilyName": "MERHEB",
            "PlayerFamilyNameFirst": "MERHEB imad",
            "CountryCode": "LBN",
            "CountryName": "Lebanon",
            "NationalityCode": "LBN",
            "NationalityName": "Lebanon",
            "OrganizationCode": "LBN",
            "OrganizationName": "LEBANON",
            "Gender": "M",
            "Age": "46",
            "DOB": "5/13/1978 12:00:00 AM",
            "Handedness": null,
            "Grip": null,
            "Style": null,
            "EquipmentSponsor": null,
            "BladeType": null,
            "RacketColoringA": null,
            "RacketColoringB": null,
            "RacketCoveringA": null,
            "RacketCoveringB": null,
            "ActiveSince": null,
            "EarningsCareer": null,
            "EarningsYTD": null,
            "LastMatch": null,
            "NextMatch": null,
            "HeadShot": "https://wttsimfiles.blob.core.windows.net/wtt-media/",
            "Bio": null,
            "HeadshotR": null,
            "HeadshotL": null
        },
        {
            "IttfId": "2328",
            "PlayerName": "ASHRAF KHALAF",
            "PlayerGivenName": "ASHRAF",
            "PlayerFamilyName": "KHALAF",
            "PlayerFamilyNameFirst": "KHALAF ASHRAF",
            "CountryCode": "QAT",
            "CountryName": "Qatar",
            "NationalityCode": "QAT",
            "NationalityName": "Qatar",
            "OrganizationCode": "QAT",
            "OrganizationName": "QATAR",
            "Gender": "M",
            "Age": "0",
            "DOB": null,
            "Handedness": null,
            "Grip": null,
            "Style": null,
            "EquipmentSponsor": null,
            "BladeType": null,
            "RacketColoringA": null,
            "RacketColoringB": null,
            "RacketCoveringA": null,
            "RacketCoveringB": null,
            "ActiveSince": null,
            "EarningsCareer": null,
            "EarningsYTD": null,
            "LastMatch": null,
            "NextMatch": null,
            "HeadShot": "https://wttsimfiles.blob.core.windows.net/wtt-media/",
            "Bio": null,
            "HeadshotR": null,
            "HeadshotL": null
        }
    ]
}



