<div class="utm-generator-container">
    <label for="base-url">Base URL</label>
    <input type="text" id="base-url" placeholder="https://bertan.net">

    <label for="utm-source">Source (utm_source)</label>
    <input type="text" id="utm-source" placeholder="e.g. google">

    <label for="utm-medium">Medium (utm_medium)</label>
    <input type="text" id="utm-medium" placeholder="e.g. cpc">

    <label for="utm-campaign">Campaign (utm_campaign)</label>
    <input type="text" id="utm-campaign" placeholder="e.g. summer_sale">

    <label for="utm-term">Term (utm_term) [Optional]</label>
    <input type="text" id="utm-term" placeholder="e.g. running+shoes">

    <label for="utm-content">Content (utm_content) [Optional]</label>
    <input type="text" id="utm-content" placeholder="e.g. banner_ad">

    <button onclick="generateUTM()">Generate UTM URL</button>

    <input type="text" id="generated-url" readonly onclick="copyToClipboard(this)" placeholder="Generated UTM URL">

    <p id="copy-message" style="display: none; color: green;">Copied!</p>
</div>

<style>
    .utm-generator-container {
        text-align: center;
        background-color: #fff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        width: 400px;
        margin: auto;
    }

    .utm-generator-container h1 {
        margin-bottom: 20px;
        color: #333;
    }

    .utm-generator-container label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
        color: #444;
    }

    .utm-generator-container input[type="text"] {
        padding: 8px;
        border: 2px solid #ccc;
        border-radius: 5px;
        width: 100%;
        margin-bottom: 15px;
        font-size: 14px;
    }

    .utm-generator-container button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: #fff;
        cursor: pointer;
        font-size: 16px;
    }

    .utm-generator-container button:hover {
        background-color: #0056b3;
    }

    .utm-generator-container input[type="text"]:focus {
        outline: none;
        border-color: #007bff;
    }

    #generated-url {
        padding: 8px;
        border: 2px solid #ccc;
        border-radius: 5px;
        width: 100%;
        font-size: 14px;
        margin-top: 15px;
        cursor: pointer;
    }

    #copy-message {
        display: none;
        color: green;
        margin-top: 10px;
    }
</style>

<script>
    function generateUTM() {
        var baseUrl = document.getElementById("base-url").value;
        var source = document.getElementById("utm-source").value;
        var medium = document.getElementById("utm-medium").value;
        var campaign = document.getElementById("utm-campaign").value;
        var term = document.getElementById("utm-term").value;
        var content = document.getElementById("utm-content").value;

        var url = new URL(baseUrl);
        url.searchParams.set("utm_source", source);
        url.searchParams.set("utm_medium", medium);
        url.searchParams.set("utm_campaign", campaign);

        if (term) {
            url.searchParams.set("utm_term", term);
        }

        if (content) {
            url.searchParams.set("utm_content", content);
        }

        document.getElementById("generated-url").value = url.toString();
    }

    function copyToClipboard(inputElement) {
        inputElement.select();
        document.execCommand("copy");
        var message = document.getElementById("copy-message");
        message.style.display = "block";
        setTimeout(function() {
            message.style.display = "none";
        }, 2000); // Hide message after 2 seconds
    }
</script>
