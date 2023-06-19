import requests

def get_public_ip():
    response = requests.get('https://api.ipify.org?format=json')
    ip_data = response.json()
    public_ip = ip_data['ip']
    return public_ip

if __name__ == '__main__':
    public_ip = get_public_ip()
    print("Public IP Address:", public_ip)