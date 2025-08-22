# Microsoft Activation Scripts (MAS)

Open-source Windows and Office activator featuring HWID, Ohook, TSforge, KMS38, and Online KMS activation methods, along with advanced troubleshooting.

---

### How to Activate Windows / Office / Extended Updates (ESU)?

#### Method 1 - PowerShell ❤️

::: info

1. **Open PowerShell**  
   Click the **Start Menu**, type `PowerShell`, then open it.

2. **Copy and paste the code below, then press enter.**  
   - For **Windows 8, 10, 11**: 📌
     ```
     irm https://get.activated.win | iex
     ```
   - For **Windows 7** and later:
     ```
     iex ((New-Object Net.WebClient).DownloadString('https://get.activated.win'))
     ```
:::

::: details **Script not launching❓Click here for info.**


- If the above is blocked (by ISP/DNS), try this (needs **updated Windows 10 or 11**):
  ```
  iex (curl.exe -s --doh-url https://1.1.1.1/dns-query https://get.activated.win | Out-String)
  ```
- If that fails or you have an older Windows, use [**Method 2**](#).


3. The activation menu will appear. **Choose the green-highlighted options** to activate Windows or Office.

4. **Done!**

:::

#### Method 2 - Traditional (Windows Vista and later)

::: details Click here to view

  
1.   Download the file using one of the links below:  
`https://github.com/massgravel/Microsoft-Activation-Scripts/archive/refs/heads/master.zip`  
or  
`https://git.activated.win/massgrave/Microsoft-Activation-Scripts/archive/master.zip`
2.   Right-click on the downloaded zip file and extract it.
3.   In the extracted folder, find the folder named `All-In-One-Version`.
4.   Run the file named `MAS_AIO.cmd`.
5.   You will see the activation options. Follow the on-screen instructions.
6.   That's all.

:::

---

::: tip

- Some ISPs/DNS block access to our domains. You can bypass this by enabling [DNS-over-HTTPS (DoH)](https://developers.cloudflare.com/1.1.1.1/encryption/dns-over-https/encrypted-dns-browsers/) in your browser.  
- **Having trouble**❓Connect with us [here](#).

:::

---

- To activate additional products such as **Office for macOS, Visual Studio, RDS CALs, and Windows XP**, check [here](#).
- To run the scripts in unattended mode, check [here](#).

---

::: info

- The IRM command in PowerShell downloads a script from a specified URL, and the IEX command executes it.
- Always double-check the URL before executing the command and verify the source is trustworthy when manually downloading files.
- Be cautious, as some spread malware disguised as MAS by changing the URL in the IRM command.

:::

------------------------------------------------------------------------

## MAS Latest Release

Last Release - v3.5 (10-Aug-2025)  
[GitHub](https://github.com/massgravel/Microsoft-Activation-Scripts) / [Azure DevOps](https://dev.azure.com/massgrave/_git/Microsoft-Activation-Scripts) / [Self-hosted Git](https://git.activated.win/massgrave/Microsoft-Activation-Scripts)

------------------------------------------------------------------------

## Features

-   **HWID (Digital License)** Method to Permanently Activate Windows
-   **Ohook** Method to Permanently Activate Office
-   **TSforge** Method to Permanently Activate Windows/ESU/Office
-   **KMS38** Method to Activate Windows Till the Year 2038
-   **Online KMS** Method to Activate Windows/Office For 180 Days (Lifetime With Renewal Task)
-   Advanced Activation Troubleshooting
-   $OEM$ Folders For Preactivation
-   Change Windows Edition
-   Change Office Edition
-   Check Windows/Office Activation Status
-   Available in All In One and Separate Files Versions
-   Fully Open Source and Based on Batch Scripts
-   Fewer Antivirus Detections

------------------------------------------------------------------------

## Activations Summary

:::tabs
== Activations

| Activation Type | Supported Product      | Activation Period                    | Is Internet Needed? |
|:----------------|:-----------------------|:-------------------------------------|:--------------------|
| HWID            | Windows 10-11          | Permanent                            | Yes                 |
| Ohook           | Office                 | Permanent                            | No                  |
| TSforge         | Windows / ESU / Office | Permanent                            | Yes, needed on build 19041 and later |
| KMS38           | Windows 10-11-Server   | Till the Year 2038                   | No                  |
| Online KMS      | Windows / Office       | 180 Days. Lifetime With Renewal Task | Yes                 |

For more details, use the respective activation details in Docs and [comparison chart](#).  
To activate unsupported products such as **Office on Mac**, check [here](#).

Made with Love ❤️